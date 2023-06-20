import Likes from "./model.js";

// Create a like
const createLike = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    // Check if the like already exists
    const existingLike = await Likes.findOne({ where: { post_id, user_id } });
    if (existingLike) {
      return res.status(400).json({ message: "Like already exists." });
    }

    // Create the like
    const like = await Likes.create({ post_id, user_id });

    return res.status(201).json(like);
  } catch (error) {
    console.error("Error creating like:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Remove a like
const removeLike = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    // Find and delete the like
    const like = await Likes.findOne({ where: { post_id, user_id } });
    if (!like) {
      return res.status(404).json({ message: "Like not found." });
    }

    await like.destroy();

    return res.status(200).json({ message: "Like removed successfully." });
  } catch (error) {
    console.error("Error removing like:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default { createLike, removeLike };
