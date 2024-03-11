using BookStore.BLL.Interfaces;
using BookStore.DAL.Context;
using BookStore.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.BLL.Repository
{
    public class BookRepository : GenericRepository<Book>, IBookRepository
    {
        private readonly BookStoreContext _context;

        public BookRepository(BookStoreContext context) : base(context) 
        {
            _context = context;
        }
    }
}
