import { fetchFromAPI } from "./utils";

export interface Answer {
  id: number;
  text: string;
  rating: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export async function getQuestions(): Promise<Question[]> {
  let url = encodeURI(`http://localhost:7007/questions`);
  try {
    let response = await fetchFromAPI(url);
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createQuestion(text: string): Promise<any> {
  let url = encodeURI(`http://localhost:7007/questions`);
  try {
    let response = await fetchFromAPI(url, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateQuestion(
  id: string,
  updatedQuestion: Question
): Promise<any> {
  let url = encodeURI(`http://localhost:7007/questions/${id}`);
  try {
    let response = await fetchFromAPI(url, {
      method: "PUT",
      body: JSON.stringify({
        text: updatedQuestion.text,
      }),
    });
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deleteQuestion(id: string): Promise<any> {
  let url = encodeURI(`http://localhost:7007/questions/${id}`);
  try {
    let response = await fetchFromAPI(url, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}
