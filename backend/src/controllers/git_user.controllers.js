import { pool } from "../db.js";

export const get_git_users = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM git_user");

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const add_git_user = async (req, res) => {
  try {
    const { id, login, html_url, avatar_url } = req.body.data;
    console.log(req.body.data);

    await pool.query(
      "INSERT INTO git_user (id, login, html_url, avatar_url) VALUES (?, ?, ?, ?)",
      [id, login, html_url, avatar_url]
    );

    res.send("Post success");
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const delete_git_user = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM git_user WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Git user not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
