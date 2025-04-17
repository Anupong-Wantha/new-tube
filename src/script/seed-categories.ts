import { db } from "@/db";
import { categorise } from "@/db/schema";



const categoryName =[
    "Cars and vehicles",
    "Comedy",
    "PODCAST",
    "Education",
    "Gaming",
    "Entertaiment",
    "Film and animation",
    "How-to and style",
    "Music",
    "New and politict",
    "People and animals",
    "Science and technology",
    "Sports",
    "Traval and events",
];

async function main() {
    console.log("Seeding categories..");

    try{
        const values = categoryName.map((name)=>({
            name,
            description:`Video related to ${name.toLowerCase()}`,  
        }))

        await db.insert( categorise ).values(values);

        console.log("Categores seeded successfully!")
    }catch(error){
        console.log("Error Seeding categorise:  ",error);
        process.exit(1)
    }
}

main();