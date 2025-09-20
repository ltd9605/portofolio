import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fjkxopxhkwngtwrykyhb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa3hvcHhoa3duZ3R3cnlreWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjg2NjYsImV4cCI6MjA3MzkwNDY2Nn0.pM8frhA18aT1WvD4mpiUlZBxQRLVfnrRaS6HZ-G-LSo";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export async function getComments() {
    const { data, error } = await supabase.from("comments").select("*");
    if (error) throw error;
    return data;
}
export async function getProjects() {
    const { data, error } = await supabase
        .from("projects")
        .select(`
      id, title, img, description, github_link, demo_link,slug,
      key_features (id, feature),
      project_techs (
        techs (id, title, img)
      )
    `);
    if (error) throw error;
    return data.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        img: p.img,
        description: p.description,
        keyFeatures: p.key_features?.map((f) => f.feature) || [],
        links: {
            github: p.github_link,
            demo: p.demo_link,
        },
        tech: p.project_techs?.map((t) => t.techs.title) || [],
    }));
}
export async function getTechs() {
    const { data, error } = await supabase.from("techs").select("*");
    if (error) throw error;
    return data.map((t) => ({
        id: t.id,
        title: t.title,
        img: t.img,
    }));
}
