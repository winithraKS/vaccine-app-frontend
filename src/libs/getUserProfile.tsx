export default async function getUserProfile(token:string) {
    const response = await fetch("https://vaccine-app-backend-blond.vercel.app:443/api/v1/auth/me",{
        method:"GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok) throw new Error("fail to get user profile")
    return await response.json()
}