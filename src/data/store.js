import { reactive } from "vue";
export const store = reactive({
  characters: [],
  IsPageLoading: false,
  storeUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  baseUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});
