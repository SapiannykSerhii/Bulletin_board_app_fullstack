export const initialState = {

  admin:{
    isLogged: false,
  },

  user: {
    loggedIn: true,
    name: 'Serhii SSS',
    role: 'user',
    loading: {
      active: true,
      error: false,
    },
  },

  posts: {
    data: [
      {
        id: '1',
        title: 'Post 1',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'John Doe',
        status: 'published',
        photo: 'tsang.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },
      {
        id: '2',
        title: 'Post 2',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Harry Potter',
        status: 'published',
        photo: 'motorcycle.jpg',
        phone: '111-222-333-444',
        location: 'Krakow',
      },

      {
        id: '3',
        title: 'Post 3',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Marry Poppins',
        status: 'published',
        photo: 'tsang.jpg',
        phone: '111-222-333-444',
        location: 'Poznan',
      },
      {
        id: '4',
        title: 'Post 4',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Jared Leto',
        status: 'published',
        photo: 'motorcycle.jpg',
        phone: '111-222-333-444',
        location: 'Lodz',
      },
      {
        id: '5',
        title: 'Post 5',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Maroon 5',
        status: 'published',
        photo: 'tsang.jpg',
        phone: '111-222-333-444',
        location: 'Gdansk',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
