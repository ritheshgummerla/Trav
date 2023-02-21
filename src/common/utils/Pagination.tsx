/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import TablePagination from '@mui/material/TablePagination';

function Pagination(props: any) {
  return (
    <div>
      <TablePagination
        rowsPerPage={props?.rowsPerPage ? props?.rowsPerPage : null}
        rowsPerPageOptions={[10, 50, 100, 200]}
        component="div"
        className="pagination"
        count={props?.count || null}
        page={props?.page === 0 ? 0 : props?.page || null}
        onPageChange={props.handleChangePage}
        onRowsPerPageChange={props.handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Pagination;
