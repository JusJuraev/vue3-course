import { range } from "@/helpers/range"

export enum MorePages {
  MORE = "..."
}

interface GetPagesParams {
  totalPages: number
  currentPage: number
  pageNeighbours: number
}

export function getPages(params: GetPagesParams): Array<number | MorePages> {
  const { totalPages, currentPage, pageNeighbours } = params
  /**
   * totalNums: the total page numbers to show on the control
   * totalBlocks: totalNums + 2 to cover for the left(<) and right(>) controls
   */
  const totalNumbers = pageNeighbours * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours)
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

    const pages = range(startPage, endPage + 1)

    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    const hasLeftSpill = startPage > 2
    const hasRightSpill = totalPages - endPage > 1
    const spillOffset = totalNumbers - (pages.length + 1)

    if (hasLeftSpill && !hasRightSpill) {
      // handle: (1) ... {5 6} [7] {8 9} (10)
      const extraPages = range(startPage - spillOffset, startPage)
      const formedPages = [MorePages.MORE, ...extraPages, ...pages]
      return [1, ...formedPages, totalPages]
    }

    if (!hasLeftSpill && hasRightSpill) {
      // handle: (1) {2 3} [4] {5 6} ... (10)
      const extraPages = range(endPage + 1, endPage + spillOffset + 1)
      const formedPages = [...pages, ...extraPages, MorePages.MORE]
      return [1, ...formedPages, totalPages]
    }

    if (hasLeftSpill && hasRightSpill) {
      // handle: (1) ... {4 5} [6] {7 8} ... (10)
      const formedPages = [MorePages.MORE, ...pages, MorePages.MORE]
      return [1, ...formedPages, totalPages]
    }

    return [1, ...pages, totalPages]
  }

  return range(1, totalPages + 1)
}
