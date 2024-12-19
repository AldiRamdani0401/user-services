const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

// Ambil variabel dari file .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE;

// Buat koneksi Supabase
const supabase = createClient(supabaseUrl, supabaseServiceRole);

module.exports = supabase;