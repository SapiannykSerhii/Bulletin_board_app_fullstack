export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Post 1',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'John Doe',
        status: 'published',
        photo: 'header1.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },
      {
        id: 2,
        title: 'Post 2',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Marry Poppins',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Krakow',
      },

      {
        id: 3,
        title: 'Post 2',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Marry Poppins',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Poznan',
      },


    ],
    isLogged: true,
    loading: {
      active: false,
      error: false,
    },
  },
};
