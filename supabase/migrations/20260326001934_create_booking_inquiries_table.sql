/*
  # Create booking inquiries table

  1. New Tables
    - `booking_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `email` (text) - Customer's email address
      - `service_type` (text) - Type of service requested (Braids, Face Paint, Glam, etc.)
      - `event_date` (date, nullable) - Preferred date for the event/appointment
      - `message` (text) - Additional details or questions from the customer
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      
  2. Security
    - Enable RLS on `booking_inquiries` table
    - No public read access (admin only)
    - Allow anonymous inserts for public booking form submissions
    
  3. Notes
    - This table stores all booking inquiries from the website
    - Admin access would be needed to view inquiries (future feature)
    - Public users can only insert their own inquiries
*/

CREATE TABLE IF NOT EXISTS booking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  event_date date,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a booking inquiry (insert only)
CREATE POLICY "Anyone can submit booking inquiry"
  ON booking_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (future admin) can view inquiries
CREATE POLICY "Only authenticated users can view inquiries"
  ON booking_inquiries
  FOR SELECT
  TO authenticated
  USING (true);