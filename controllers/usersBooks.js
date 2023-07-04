import UsersBook from "../models/UsersBook.js";

export const getBooks = async (req, res) => {
    try {
      const books = await UsersBook.find();
  
      res.status(200).json(books);
      
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const postBooks = async (req, res) => {
    try {
      const { Title, Subtitle, Authors, Description, Publisher, PublishedDate, Category, Status,LastPageRead, Rating } = req.body;
      // const user = await User.findById(userId);
      const newBook = new UsersBook({
        Title: Title,
        Subtitle: Subtitle,
        Authors: Authors,
        Description: Description,
        Publisher: Publisher,
        PublishedDate: PublishedDate,
        Category: Category,
        Status: Status,
        LastPageRead: LastPageRead,
        Rating: Rating
      });
      await newBook.save();
  
      const books = await UsersBook.find();
      res.status(201).json(books);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };