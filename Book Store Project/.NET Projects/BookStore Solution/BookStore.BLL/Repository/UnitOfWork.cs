using BookStore.BLL.Interfaces;
using BookStore.DAL.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.BLL.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public IBookRepository BookRepository { get ; set; }

        public UnitOfWork(BookStoreContext context)
        {
            BookRepository = new BookRepository(context);

        }
    }
}
