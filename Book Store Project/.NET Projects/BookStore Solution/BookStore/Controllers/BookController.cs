using BookStore.BLL.Interfaces;
using BookStore.DAL.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigins")]
    public class BookController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public BookController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [ProducesResponseType(statusCode: 200)]
        [ProducesResponseType(statusCode: 404)]
        public ActionResult<IEnumerable<Book>> Get()
        {
            var Books = _unitOfWork.BookRepository.GetAll();

            if (Books.Count() > 0)
            {
                return Ok(Books);
;            }

            return NotFound();
        }

        [HttpGet("id:int")]
        [ProducesResponseType(statusCode: 200)]
        [ProducesResponseType(statusCode: 404)]
        [ProducesResponseType(statusCode: 400)]
        public ActionResult GetById(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var Book = _unitOfWork.BookRepository.Get(id);

            if (Book == null)
            {
                return NotFound();
            }

            return Ok(Book);
        }


        [HttpPost]
        [ProducesResponseType(statusCode: 200)]
        [ProducesResponseType(statusCode: 400)]
        [ProducesResponseType(statusCode: 404)]

        public ActionResult Create([FromBody]Book book)
        {
            if (book == null)
            {
                return NotFound();
            }


            if (ModelState.IsValid)
            {
                _unitOfWork.BookRepository.Create(book);
                //return Ok(book);
                return CreatedAtAction(nameof(Get), new { id = book.BookId},book);            }

            return BadRequest();
        }


        [HttpDelete("id:int")]
        [ProducesResponseType(statusCode: 400)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]

        public ActionResult Delete(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var bookToRemove = _unitOfWork.BookRepository.Get(Id);
            if (bookToRemove != null)
            {
                _unitOfWork.BookRepository.Delete(bookToRemove);
                return NoContent();
            }
            return BadRequest();
        }


        [HttpPut("id:int")]
        [ProducesResponseType(statusCode: 404)]
        [ProducesResponseType(statusCode: 400)]
        public ActionResult Update(int id, Book book)
        {
            if (id == 0 || id != book.BookId || book == null)
            {
                return BadRequest();
            }

            var taskUpdated = _unitOfWork.BookRepository.Get(id);

            if (taskUpdated != null) if (ModelState.IsValid)
                {
                    taskUpdated.Name = book.Name;
                    taskUpdated.Author = book.Author;
                    taskUpdated.Description = book.Description;
                    taskUpdated.IsActive = book.IsActive;

                    _unitOfWork.BookRepository.Update(taskUpdated);
                    return NoContent();
                }
            return BadRequest();
        }


    }
}
