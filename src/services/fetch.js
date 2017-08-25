export function customFetch() {
  return fetch(...arguments)
  .then(response =>  new Promise((res, rej) => {
      setTimeout(() => {
        res(response.json());
      }, 200);
    })
  )
}
