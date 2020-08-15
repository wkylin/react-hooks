export function fetchMock(lang) {
  return new Promise((resolve) => resolve(data[lang]))
}

const data = {
  'en-US': [
    {
      img:
        'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/2017_GameOfThrones_HBO_220817-920x584.jpg',
      title: 'Game of Thrones',
      genre: 'Fantasy',
      date: 'April 17, 2011',
      description: `Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm's noble families for the Iron Throne, while other families fight for independence from it.`,
      link: 'https://www.google.com',
    },
    {
      img:
        'http://i2.cdn.turner.com/cnn/dam/assets/140922202605-08-pulp-fiction-story-top.jpg',
      title: 'Pulp Fiction',
      genre: 'Crime',
      date: 'May 21, 1994',
      description: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.`,
      link: 'https://www.google.com',
    },
    {
      img:
        'https://static.zakon.kz/uploads/posts/2019-04/pic_690/2019042912291746122_7ryhso4ydxtbv1zuu3mtpheq0d5-1.jpg',
      title: 'Avengers',
      genre: 'Superhero',
      date: 'April 11, 2012',
      description: `When the mysterious and unpredictable power source called the Tesseract is stolen by Loki from S.H.I.E.L.D. agents to rule the entire world the Avengers have to unite and stop Loki and his infinite wrath. The S.H.I.E.L.D. head named Nick Fury tries to gather these mighty heroes and prepares them for a mighty battle.`,
      link: 'https://www.google.com',
    },
  ],
  'zh-CN': [
    {
      img:
        'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/2017_GameOfThrones_HBO_220817-920x584.jpg',
      title: 'Juego De Tronos',
      genre: 'Fantasía',
      date: '17 de abril de 2011',
      description: `Game of Thrones se basa aproximadamente en las historias de A Song of Ice and Fire, ambientadas en los siete reinos ficticios de Westeros y el continente de Essos. La serie narra las violentas luchas dinásticas entre las familias nobles del reino por el Trono de Hierro, mientras que otras familias luchan por su independencia.`,
      link: 'https://www.google.com',
    },
    {
      img:
        'http://i2.cdn.turner.com/cnn/dam/assets/140922202605-08-pulp-fiction-story-top.jpg',
      title: 'Tiempos Violentos',
      genre: 'El crimen',
      date: '21 de mayo 1994',
      description: `Jules Winnfield (Samuel L. Jackson) y Vincent Vega (John Travolta) son dos sicarios que buscan recuperar una maleta robada de su empleador, el jefe de la mafia Marsellus Wallace (Ving Rhames). Wallace también le pidió a Vincent que saque a su esposa Mia (Uma Thurman) unos días después, cuando el propio Wallace saldrá de la ciudad. Butch Coolidge (Bruce Willis) es un viejo boxeador al que Wallace le paga para que pierda su pelea. Las vidas de estas personas aparentemente no relacionadas se entretejen formando una serie de incidentes divertidos, extraños e inesperados.`,
      link: 'https://www.google.com',
    },
    {
      img:
        'https://static.zakon.kz/uploads/posts/2019-04/pic_690/2019042912291746122_7ryhso4ydxtbv1zuu3mtpheq0d5-1.jpg',
      title: 'Los Vengadores',
      genre: 'Superhéroes',
      date: '11 de abril de 2012 ',
      description: `Cuando Loki roba la fuente de energía misteriosa e impredecible llamada Tesseract de S.H.I.E.L.D. agentes para gobernar el mundo entero, los Vengadores deben unirse y detener a Loki y su ira infinita. El escudo. la cabeza llamada Nick Fury trata de reunir a estos héroes poderosos y los prepara para una batalla poderosa.`,
      link: 'https://www.google.com',
    },
  ],
}
