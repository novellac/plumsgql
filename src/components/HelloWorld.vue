<template>
  <div class="hello">
    {{ allJobs }}
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const allJobs = ref([])

const { result } = useQuery(gql`
  query getSearch {
    search {
      type
      description
    }
  }
`)

watchEffect(() => {
  allJobs.value = result.value?.search
})
</script>
