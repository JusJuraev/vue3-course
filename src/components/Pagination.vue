<template v-if="totalPages > 1">
  <div class="pagination">
    <jus-button
      class="page-nav"
      size="sm"
      variantColor="primary"
      :disabled="currentPage === 1"
      @click="toPrevPage"
    >
      <vue-feather type="chevron-left"></vue-feather>
    </jus-button>

    <div
      :key="page"
      class="page"
      :class="{ 'active-page': page === currentPage }"
      v-for="page of pages"
      @click="navigate(page)"
    >
      {{ page }}
    </div>

    <jus-button
      class="page-nav"
      size="sm"
      variantColor="primary"
      :disabled="currentPage === totalPages"
      @click="toNextPage"
    >
      <vue-feather type="chevron-right"></vue-feather>
    </jus-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import { getPages, MorePages } from "@/helpers/pagination"

  export default defineComponent({
    name: "Pagination",
    props: {
      total: {
        type: Number as PropType<number>,
        required: true
      },
      limit: {
        type: Number as PropType<number>,
        default: 10
      },
      neighbours: {
        type: Number as PropType<number>,
        default: 2
      }
    },
    setup: (props) => {
      const router = useRouter()
      const route = useRoute()

      const routeQueryPage = route.query.page
      const currentPage = ref(Number(routeQueryPage) || 1)
      const totalPages = Math.ceil(props.total / props.limit)
      const pageNeighbours = Math.max(0, Math.min(props.neighbours, 2))

      const pages = ref(
        getPages({
          currentPage: currentPage.value,
          totalPages,
          pageNeighbours
        })
      )

      const goToPage = (page: number) => {
        currentPage.value = page
        pages.value = getPages({
          currentPage: page,
          totalPages,
          pageNeighbours
        })

        return router.replace({
          path: route.path,
          query: { ...route.query, page }
        })
      }

      const navigate = (page: number | MorePages) => {
        if (page === MorePages.MORE) {
          return
        }

        return goToPage(page)
      }

      const toPrevPage = () => {
        return goToPage(currentPage.value - 1)
      }

      const toNextPage = () => {
        return goToPage(currentPage.value + 1)
      }

      return {
        pages,
        totalPages,
        currentPage,
        navigate,
        toPrevPage,
        toNextPage
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/mixins";
  @import "src/scss/functions";
  @import "src/scss/typography";
  @import "src/scss/variables";

  .pagination {
    @include flex(center);
    margin-top: spacing(8);

    & .page {
      @include fontCallout;
      cursor: pointer;
      padding: spacing(1) spacing(2);
      min-width: spacing(7);
      text-align: center;

      &.active-page {
        background: rgba($colorPrimary, 0.16);
        border-radius: $roundedFull;
        color: $colorPrimary;
        pointer-events: none;
      }
    }
  }

  .page-nav {
    @include flex(center, center);

    &.button-small {
      padding: spacing(1);
    }

    &:first-child {
      margin-right: spacing(3);
    }

    &:last-child {
      margin-left: spacing(3);
    }
  }
</style>
