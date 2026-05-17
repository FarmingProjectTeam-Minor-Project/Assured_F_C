import API from "./api"


export const addCrop =
  async (cropData) => {

    const response =
      await API.post(

        "/api/crops/add",
        cropData
      )

    return response.data
  }


export const getAllCrops =
  async () => {

    const response =
      await API.get(
        "/api/crops"
      )

    return response.data
  }


export const getCropById =
  async (cropId) => {

    const response =
      await API.get(

        `/api/crops/${cropId}`

      )

    return response.data
  }


export const deleteCrop =
  async (cropId) => {

    const response =
      await API.delete(

        `/api/crops/delete/${cropId}`

      )

    return response.data
  }

export const updateCrop =
  async (
    cropId,
    cropData
  ) => {

    const response =
      await API.put(

        `/api/crops/update/${cropId}`,

        cropData
      )

    return response.data
  }


export const getFarmerDashboard =
  async (farmerName) => {

    const response =
      await API.get(

        `/api/crops/farmer-dashboard?farmer_name=${farmerName}`

      )

    return response.data
  }