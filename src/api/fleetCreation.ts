import { AuthData } from '@/models/AuthData'
import { UserData } from '@/models/UserData'
import { Fleet } from '@/models/fleet'
import { AxiosResponse } from 'axios'
// We define a class with a method for every call we do to the API
class ApiCalls {
  async authUser (email:string, password:string):Promise<AuthData> {
    const { data } = await fakeShopApi.post<unknown, AxiosResponse<AuthData>>(
      '/auth/login',
      {
        email: email,
        password: password
      }
    )
    return data
  }

  async getCurrentUserData ():Promise<UserData> {
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<UserData>>(
      '/auth/profile'
    )
    return data
  }

  async getAllProducts (filterName:string|undefined = undefined):Promise<Fleet[]> {
    if (!filterName) {
      filterName = undefined
    }
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Fleet[]>>(
      '/products', { params: { title: filterName } }
    )
    return data
  }

  async getSingleProduct (id:number):Promise<Fleet> {
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Fleet>>(
      `/products/${id}`
    )
    return data
  }
}

const apiCalls = new ApiCalls()
export default apiCalls