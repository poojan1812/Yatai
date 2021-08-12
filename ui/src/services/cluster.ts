import axios from 'axios'
import { ICreateClusterSchema, IClusterSchema, IUpdateClusterSchema } from '@/schemas/cluster'
import { IListQuerySchema, IListSchema } from '@/schemas/list'

export async function listClusters(orgName: string, query: IListQuerySchema): Promise<IListSchema<IClusterSchema>> {
    const resp = await axios.get<IListSchema<IClusterSchema>>(`/api/v1/orgs/${orgName}/clusters`, { params: query })
    return resp.data
}

export async function fetchCluster(orgName: string, clusterName: string): Promise<IClusterSchema> {
    const resp = await axios.get<IClusterSchema>(`/api/v1/orgs/${orgName}/clusters/${clusterName}`)
    return resp.data
}

export async function createCluster(orgName: string, data: ICreateClusterSchema): Promise<IClusterSchema> {
    const resp = await axios.post<IClusterSchema>(`/api/v1/orgs/${orgName}/clusters`, data)
    return resp.data
}

export async function updateCluster(
    orgName: string,
    clusterName: string,
    data: IUpdateClusterSchema
): Promise<IClusterSchema> {
    const resp = await axios.patch<IClusterSchema>(`/api/v1/orgs/${orgName}/clusters/${clusterName}`, data)
    return resp.data
}
