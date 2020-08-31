export interface DataApiResponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<UserData>
}

export interface UserData{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}