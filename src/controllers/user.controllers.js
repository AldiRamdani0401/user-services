const supabase = require("../services/supabase/client");

const getUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users') // Nama tabel
      .select('*'); // Pilih semua data

    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { ip, nation } = req.body;

    // Validasi input
    if (!ip || !nation) {
      return res.status(400).json({
        success: false,
        message: 'IP and NATION are required',
      });
    }

    const status = true;

    // Menyisipkan data ke dalam tabel 'users'
    const { error } = await supabase
      .from('users')
      .insert([{ ip, nation, status }]);

    if (error) {
      throw error;
    }

    res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  getUsers, createUser
}