<template>
  <div v-if="isPaginationShown" class="pagination">
    <app-button
      class="page-nav"
      size="sm"
      variantColor="primary"
      :disabled="currentPage === 1"
      @click="toPrevPage"
    >
      <svg-icon icon="chevron_left"></svg-icon>
    </app-button>

    <div
      :key="page"
      class="page"
      :class="{ 'active-page': page === currentPage }"
      v-for="page of pages"
      @click="navigate(page)"
    >
      {{ page }}
    </div>

    <app-button
      class="page-nav"
      size="sm"
      variantColor="primary"
      :disabled="currentPage === totalPages"
      @click="toNextPage"
    >
      <svg-icon icon="chevron_right"></svg-icon>
    </app-button>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { getPages, MorePages } from "@/helpers/pagination";

  export default defineComponent({
    name: "Pagination",
    props: {
      total: {
        type: Number,
        required: true,
      },
      limit: {
        type: Number,
        default: 10,
      },
      neighbours: {
        type: Number,
        default: 2,
      },
    },
    computed: {
      isPaginationShown() {
        return this.totalPages > 1;
      },
    },
    setup: (props) => {
      const router = useRouter();
      const route = useRoute();
      const totalPages = computed(() => getTotalPages(props.total));

      const routeQueryPage = route.query.page;
      const currentPage = ref(Number(routeQueryPage) || 1);
      const pageNeighbours = Math.max(0, Math.min(props.neighbours, 2));

      function getTotalPages(totalCount: number) {
        return Math.ceil(totalCount / props.limit);
      }

      const pages = computed(() =>
        getPages({
          currentPage: currentPage.value,
          totalPages: totalPages.value,
          pageNeighbours,
        })
      );

      const goToPage = (page: number) => {
        currentPage.value = page;

        return router.replace({
          path: route.path,
          query: { ...route.query, page },
        });
      };

      const navigate = (page: number | MorePages) => {
        if (page === MorePages.MORE) {
          return;
        }

        return goToPage(page);
      };

      const toPrevPage = () => {
        return goToPage(currentPage.value - 1);
      };

      const toNextPage = () => {
        return goToPage(currentPage.value + 1);
      };

      return {
        pages,
        totalPages,
        currentPage,
        navigate,
        toPrevPage,
        toNextPage,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/mixins";
  @import "src/scss/functions";
  @import "src/scss/typography";
  @import "src/scss/variables";

  .pagination {
    align-items: center;
    display: flex;
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
    align-items: center;
    display: flex;
    justify-content: center;

    &.button--small {
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
