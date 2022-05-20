import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getSongById, getTitles } from '../data/dataProvider';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { IconButton, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import { v4 as uuid } from 'uuid';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface Props {
  songIndex: number;
}

const ExpandPanel: React.FC<Props> = ({ songIndex }) => {
  const [favorite, setFavorite] = React.useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const setSongCookie = (id: number) => {
    var cookie: number[] = cookies['cookie-name'];
    if (!cookie) {
      setCookie('cookie-name', [id], { path: '/' });
      return;
    }

    if (cookie.includes(id)) {
      cookie = cookie.filter((x) => x !== id);
      setCookie('cookie-name', cookie, { path: '/' });
    } else {
      cookie.push(id);
      setCookie('cookie-name', cookie, { path: '/' });
    }
  };

  const isRenderingFavorite = (id: number) => {
    if(!cookies) return false;
    if(!cookies['cookie-name']) return false;
    if((cookies['cookie-name'] as number[]).includes(songIndex)) return true;
  };

  return (
    <div style={{ display:'flex' }}>
    <Accordion style={{ flexGrow: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography key={`${songIndex}Summary`} fontSize={23} style={{ marginRight: 30 }}>{getTitles().filter(s => s[0] === songIndex)[0][1]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {getSongById(songIndex).map((item: any) => {
          return <Typography key={uuid()}>{item[2]}</Typography>;
        })}
      </AccordionDetails>
    </Accordion>
    <IconButton style={{ alignItems:'start', height: 50}}
          onClick={() => {
            setFavorite(!favorite);
            setSongCookie(songIndex);       
          }}>
          {isRenderingFavorite(songIndex) ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
        </IconButton>
    </div>
  );
};

export default ExpandPanel;
