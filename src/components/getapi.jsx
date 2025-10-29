import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
export async function getComments() {
    const { data, error } = await supabase.from("comments").select("*");
    if (error) throw error;
    return data;
}
export async function getCertificate() {
    const { data, error } = await supabase.from("certificates").select("*");
    if (error) throw error;
    return data.map((t) => ({
        id: t.id,
        img: t.img,
        link: t.link,
        title: t.title,
        date: t.date,
        core: t.core
    }));
}
