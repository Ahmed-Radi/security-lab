"use server"
// Assuming this is server-side code due to the use of createClient
import { createClient } from "../../utils/supabase/server";
import { parseStringify } from "../utils";

// Create a single instance of the Supabase client
const supabase = createClient();

export const fetchProfile = async () => {
  // Attempt to get the current user
  const { data: { user }, error: getUserError } = await supabase.auth.getUser();

  // Handle case where user is not found
  if (!user) {
    throw new Error('User not found');
  }

  // Fetch the user profile from the 'user_profiles' table
  const { data, error: selectedUserError } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  // Handle potential error from fetching the user profile
  if (selectedUserError) {
    console.error(selectedUserError);
    throw new Error('Failed to fetch user profile');
  }

  // Return the parsed user profile data
  return parseStringify(data);
};