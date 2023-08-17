import axios from "axios";
export async function todoFetcher(key: string) {
    try {
        const res = await axios.get(`${key}`);
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export async function todoUpdater(key: string, { arg }: { arg: { title: string } }) {
    return axios.post(`${key}`, arg)
}
// async function sendRequest(url, { arg }: { arg: { username: string }}) {
//     return fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(arg)
//     }).then(res => res.json())
//   }