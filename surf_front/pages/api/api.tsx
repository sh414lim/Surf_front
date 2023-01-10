import axios, { AxiosResponse } from "axios";

interface GetListResponse {
  Countries: any[];
  // {Country: "Afghanistan", CountryCode: "AF", Slug: "afghanistan", NewConfirmed: 241}
  Date: string;
  Global: any;
  Message: string;
}

export function fetchList(): Promise<AxiosResponse<GetListResponse>> {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=13dce73d621a57563589d58029a15906";
  return axios.get(url);
}

export function requsetWeather(): Promise<AxiosResponse<GetListResponse>> {
  const url = " https://api.stormglass.io/v2";
  return axios.get(url);
}

export async function getUser() {
  // async, await을 사용하는 경우
  try {
    // GET 요청은 params에 실어 보냄
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=13dce73d621a57563589d58029a15906",
      {
        params: {
          ID: 12345,
        },
      }
    );

    // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

    await axios.get("/user?ID=12345"); // 위의 요청과 동일

    var userId = 12345;
    await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

    console.log(response);
  } catch (e) {
    // 실패 시 처리
    console.error(e);
  }
}

fetchList().then((res) => res.data.Message);
