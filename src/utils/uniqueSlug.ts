import model from '../model';

// Function to create a slug from a title
const createSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')  // Replace special characters with hyphens
        .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens
};

// Function to check if slug exists in the database and create a unique slug
const generateUniqueSlug = async (title: string): Promise<string> => {
    // Generate the base slug from the title

    let blog=new model.BlogModel();


    let slug = createSlug(title);

    // Check if slug exists in the database
    let slugExists = await blog.find({ slug:slug },{slug:1});

    // If slug exists, add a unique suffix
    let suffix = 1;
    let newSlug = slug;

    while (slugExists) {
        // Create a new slug with suffix
        newSlug = `${slug}-${suffix}`;
        slugExists = await blog.find({ slug: newSlug },{slug:1});
        suffix++;
    }

    // Return the unique slug
    return newSlug;
};

// Directly export the function
export default generateUniqueSlug;
