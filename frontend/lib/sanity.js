// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import  imageUrlBuilder  from "@sanity/image-url";
export const client = createClient({
  projectId: '402bvn81',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.REACT_APP_SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getCategories() {
    const categories = await client.fetch(`*[_type == "category"]`)
    return categories
  }

  export async function getLandingPage() {
    const landgetLandingPage = await client.fetch(`*[_type == "landingPage"]`)
    return landgetLandingPage
  }
  export async function getBrand() {
    const brand = await client.fetch(`*[_type == "brand"]`)
    return brand
  }
  export async function getTestimonials() {
    const testimonial = await client.fetch(`*[_type == "testimonial"]`)
    return testimonial
  }