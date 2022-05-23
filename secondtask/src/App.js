import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import ReactPaginate from 'react-paginate';
import List from './List';

const App = (props) => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    gitHubApi();
  }, []);

  const gitHubApi = async () => {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc'
    );
    const data = await response.json();

    // console.log(data.items);
    setApiResponse(data.items);
  };

  const fetchNewPage = async (currentPage) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=2`
    );
    const data = await response.json();

    // console.log(data.items);
    setApiResponse(data.items);
  };

  const handlePageClick = (pageNum) => {
    // console.log(pageNum.selected);
    fetchNewPage();
  };

  return (
    <>
      {apiResponse.map((item) => (
        <List
          name={item.name}
          description={item.description}
          key={item.id}
          stars={item.stargazers_count}
          issues={item.open_issues_count}
          avatar={item.owner.avatar_url}
          username={item.owner.login}
        />
      ))}

<div className={classes.paginate_block}>
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={classes.pagination}
        pageClassName={classes.page}
        pageLinkClassName={classes.pageLink}
        previousClassName={classes.previous}
        previousLinkClassName={classes.previousLink}
        nextClassName={classes.next}
        nextLinkClassName={classes.nextLink}
        breakClassName={classes.break}
        breakLinkClassName={classes.breakLink}
        activeClassName={classes.active}
      />
      </div>
    </>
  );
};

export default App;
