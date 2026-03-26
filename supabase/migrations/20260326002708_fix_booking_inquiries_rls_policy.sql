/*
  # Fix RLS Policy for Booking Inquiries

  1. Security Changes
    - Drop the overly permissive INSERT policy that uses `WITH CHECK (true)`
    - Create a new restrictive INSERT policy that validates data
    - Ensures all required fields are present and non-empty
    - Validates email format
    - Prevents empty or whitespace-only submissions
    
  2. Policy Details
    - Policy name: "Public can submit valid booking inquiries"
    - Validates that name, phone, email, and service_type are not empty
    - Ensures email contains an @ symbol (basic validation)
    - Only allows INSERT operations for anonymous users
    - No read access for anonymous users
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit booking inquiry" ON booking_inquiries;

-- Create a new restrictive policy with proper validation
CREATE POLICY "Public can submit valid booking inquiries"
  ON booking_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure name is provided and not just whitespace
    name IS NOT NULL AND
    trim(name) != '' AND
    length(trim(name)) >= 2 AND
    
    -- Ensure phone is provided and not just whitespace
    phone IS NOT NULL AND
    trim(phone) != '' AND
    length(trim(phone)) >= 7 AND
    
    -- Ensure email is provided, not whitespace, and contains @
    email IS NOT NULL AND
    trim(email) != '' AND
    email LIKE '%@%' AND
    length(trim(email)) >= 5 AND
    
    -- Ensure service type is provided and not just whitespace
    service_type IS NOT NULL AND
    trim(service_type) != '' AND
    
    -- Message can be empty but if provided should not be just whitespace
    (message IS NULL OR trim(message) != '')
  );