import { useState } from 'react';

function usePagination(sortField, limit = 4) {
  const [pag, setPag] = useState({
    page: 1,
    params: {
      skip: 0,
      sortField,
      limit,
    },
  });

  const prevPage = () =>
    setPag(prev => {
      if (prev.page > 1) {
        const newPage = prev.page - 1;

        return {
          page: newPage,
          params: {
            ...prev.params,
            skip: prev.params.limit * (newPage - 1),
          },
        };
      }

      return pag;
    });

  const nextPage = () => {
    setPag(prev => {
      const newPage = prev.page + 1;
      const skip = prev.params.limit * (newPage - 1);

      return {
        page: newPage,
        params: {
          ...prev.params,
          skip,
        },
      };
    });
  };

  const orderBy = sortField =>
    setPag(prev => ({
      ...prev,
      params: {
        ...prev.params,
        sortField,
      },
    }));

  return [pag, { prevPage, nextPage, orderBy }];
}

export { usePagination };
