using BookStore.BLL.Repository;
using BookStore.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.BLL.Interfaces
{
    public interface IBookRepository : IGenericRepository<Book>
    {

    }
}
