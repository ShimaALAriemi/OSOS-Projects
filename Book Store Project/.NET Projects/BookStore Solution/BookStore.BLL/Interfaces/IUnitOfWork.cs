﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.BLL.Interfaces
{
    public interface IUnitOfWork
    {
        IBookRepository BookRepository { get; set; }
    }
}
