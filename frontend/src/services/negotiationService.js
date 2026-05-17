import API from "./api"


export const createOffer =
  async (offerData) => {

    const response =
      await API.post(

        "/api/negotiations/add",

        offerData
      )

    return response.data
  }


export const getNegotiations =
  async () => {

    const response =
      await API.get(

        "/api/negotiations"

      )

    return response.data
  }


export const updateStatus =
  async (

    negotiationId,
    status

  ) => {

    const response =
      await API.put(

        `/api/negotiations/update/${negotiationId}`,

        { status }

      )

    return response.data
  }




export const makePayment =
  async (
    negotiationId
  ) => {

    const response =
      await API.put(

        `/api/negotiations/pay/${negotiationId}`

      )

    return response.data
  }