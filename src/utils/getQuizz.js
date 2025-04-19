
export const getQuizz = (hash, quizzData) => {
    const hashId = hash.slice(-1)

    const data = quizzData.find((item) => item.id == hashId)

    return data;
}