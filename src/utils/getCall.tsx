export const getCall = async (api: string) => {
   try {
      const res = await fetch(api);
      const data: any = await res.json()
      return data;
   } catch (e) {
      console.log(e)
   }
}
