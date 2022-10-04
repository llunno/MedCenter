import { sampleData } from "@/assets/mock-data/sample-data"

export const getSearchingData = (inputValue) => {
    const searchingSampleData = sampleData;
    const data = searchingSampleData.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));

    return data;
}

export const getResultMessage = (resultList) => {
    const NOT_FOUND_MESSAGE = "Local não encontrado!";

    if(resultList?.length > 0) return `Encontrado ${resultList.length} resultados`;
    else return NOT_FOUND_MESSAGE;
}