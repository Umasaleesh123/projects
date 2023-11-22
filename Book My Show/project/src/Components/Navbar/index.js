import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';




const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBURBxIVEhUYGBgaGRgaGRIaGBoaGRgjGBkZGRwZGBocIy4lHCEuHxkYJzgmKzA1NTVDGi07QDszPy81NTUBDAwMEA8QHhISHzYsISw6Oz40OjY9ND00NDY3PTU2PjQ9NDE0NDQ0NDQ9Njc0NDQ4NDQ0NDQ0NDQ0NDQ0NDQ0Pf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQECAwQGB//EAEkQAAIBAgMDBwgHBAgGAwAAAAABAgMRBAYSBSExB0FRYXGBkRMiMjZysbKzNTdzgoOhwhQzUsEjQkNikqLR8CUmNFTh8RUWJP/EABoBAQACAwEAAAAAAAAAAAAAAAADBAIFBgH/xAAwEQEAAQMBBQUIAgMAAAAAAAAAAQIDESEEBRIxQVFhcbHBEyIyQoGR0fAUoTSS4f/aAAwDAQACEQMRAD8A58AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARTckkrt7klxfUgALqkJQm4yi4yW5xaaa7U+BaAAAAAAAC+FKUoSkoycY21SSbUb8NT4LvAsAAAX3jmKT4+/tuR3bnBC/u/Yv5VyYmcRHP8Kgt1f75y5PceU3aZxHayv7tvWouV492n7zHbju6+AACXLXzTMYzHPl4AADwAAAF06coqLlGSUleLaaUl0xvxXWi0AAAAAAAAAAAAAAEzlBXzPhb/wAfujJohiayf6z4X2/0yA3uURWzPPrhT91v5HLncZ62LiK2YJTpUZzjogtUVdbk7o4mpTlCo4zi4yW5xkmmu1PgBaC6lTlOoowi5SbsopXbfQkuJIY7YWJoUNdWhOEP4mk0u3S3p7wI0A39n7HxGJg3RozmlxkrKPZeTSb6gNA7/JsU8lbRul/a/lRRwuJw0qVdxqRlCS4xkmmvE7vJnqTtD8X5MQPPwEjZx2Aq4eqo1oShJpSSlzp84Gs0WN+cy9/77938yQoZdxdSipQw9RxavGSW5p8GrvgVL85qxDpdzRTbsTcqmI4p6zjlHf35RY5iZ/8AquN/7eZr4zYeJoUtVWjOK55uN0u1q9u8hxLaxdtV+7xUznvhoJ+dvfUVT6fD/wA8xmwOAq4iq4UYSm1FtxjzJcXv7UazRlFdVMadUd7ZrN+5FVyMzT08e2Pppnv0ZL2HOZ54CtHAxrShJU3eMajTs7X3LwfVuNeL82/RxLFF7MxTMNFtG6ot2q7tNWcTpHd1zPbHprqqUl6L7CTw+wMVUw3lIUJyha6klxXTFPfLuRGzVk09z37idpnf8pEEtl4GyW5SS6lohu/JHAHpWetnVsRs3BqjTlNxTctKva8Y2ueeYzB1KNXRVhOEuOmUWr9avx7gMABJxy/i3hvKLD1NFr3077dOn0rdwEYBbfb8jPjMFUoVtNaEoSsnpkt9nwYGAGxTwNSeDnVjCThBpTml5sW+Z+K8THQoSqV4whFynJ2jFcW+oDGDJiKE6deUJxcZxdpRfFMxgAAAJrJ/rPhfb/TIhSayf6z4X2/0yA7vMec3gtrOj5FTSjGWrXpfnc1tLIzPeHp4nYVHG0lvelN2s3Ge5KXXGVl3sheUb1on7FP3MmMZ9VlPth88CnJ7hoUdmYnG1F6GqKfFxjCKlK3W7pdxKZdzhHH46WHqUVFSjLStWrUkt8ZJrja/gyN2B9W2M/G+GJz+Q/WvD/ifLmBrbT2RozNPDQdk6sYRfQqji4+CkvA73b+YYbKp0cPRpKTUE9LelRinZXaW9tpnN7Z+sqP21D4YFvKb6ww+yh8cwJfN6p4/KdPGQjaULceKTlolBvntLf3dZhyZ6k7Q/F+TEuw31Vz+988zcnuH8rljFU721znDV0aqUY3/ADAi+T3YHlcR+01V5lN+YnwlNf1uyPv7CLzltpYza7lD93BOEH/Fvu5d74dSOyzvKWDyvTpYeOmDapykuMY2bt2yas31vpPLQLZej2nrO2NvywGwcJKMIz1QirSbja1NPmR5NPc49X+p6Bn71a2f2R+UirxTmuqHSTs1PBstquNNcx9InzT2Xczyxey8TVlTjF0r2ipNqVouW9tbuBH5ezqsZtBUK1KMdd0mndPc3paa50maGQvVraHZL5TOYyZ604X2n7h7SqOHXn+Uf8GxVO0Rw/Dy56aZ7fPLqss0Vgs+YjDx3RkpaV1WjUiu5al3HH5lwvkcwYiCXCcml1SepflJHR5hxXkeUWFTmUqV+xxipfk2bubNkqpnnCbt1XRq/Ck3L/KomFUe7MR0nzWbF3gvUXa/ntxM+NOJ8jO7/Z8pYPD8/m3+5T85/wCKRymU8BHEbco05q8G25LpUIuVu/cu8muU7FatuQprhTprxk3J/kkQeWdoLC7co1ZejGVpezNaW+69+4zpjN3w9Fa5VNrdmZ51+s58oeg7YzrHC7bVDyd4R0qc07OOpJ+bG29JNHG58q0Km2nPDSjJSgnUlF3i5b+jn06bnRZ2yw68ni8N57aTnBb9SSSU4W47krrntuPOZeg+xlpz72DMOYns/AYZqmp61bfLTbTGL6HfiadfEU9sZWqyUNNSnqai97jKK1LTLnjJbv8A0R3KV9GYH73wRK8m30Tje74JAQeQNmxxG3E5pONOOvS+Dd0o373fuOprZ8hHbro+T/o1PQ6urfe+lyUbein19ZD8lf0lX+zj8RyWN+lKn2s/mMDps/4GOF29TrQSSqf0jiuGqElqffeL8Te5TqSlDCVo8JRlG/aozj+oryq/vcJ2VffTLttf/o5NsPU4uno/yt0X7wJTLWzdWQZQtvqwqy756lF+CicpycYfXmNSt+7pzl3u0F8TPSMA40KWFw79LyTt+GoRl8RzGS8GsNjNpzasoTlBdkHOfucQOKzViPKZjxUlw1uK+5aH6SJKzm5zcpcZNt9rd2UAAAATWT/WfC+3+mRCkzk9/wDM2F9v9MgN/lG9aJ+xT9zJjGfVZT7YfPJbMWTP2zazreW0JxjFw0Xfm9er+RF58xNPDbEo4Gk+GlyV7uMYb1q65S39zApsD6tsZ+N8MTn8h+teH/E+XMnuTzFU6uzcRgqj9PVJLg5RnFRkl1q1+8ldgZQhgMbLEVKykoqWluOlQTW+Unfjbd3gc5tn6yo/bUPhgW8pvrDD7KHxzIfaW19eZZ4mC3KrGcV0qDio+KivE7/b2XobVpUa9GqoPTbVp1KUW72aurSTb8WBF4b6q5/e+eZeT7E+Syti6iV9E5z09OmlCVvyKZwdPA5Wp4OErylbtspa5TfReW7v6jDkz1J2h+L8mIG7l7GPauWcTQrSvUTl5z/vNzhLsUk12RPNJwaqOMlZ3aa6GnZrxJ/I+0/2bb8Lu0Kn9HL7z8190reLM/KDs5UNvucfRqrXbole0vzs/vHlU4iZS2bftblNvtmIcnPj4+89Cz/6tbP7I/KR54z0PP3q1s/sj8pFKj4anWbV/kWPGryUyF6tbQ7JfKZzGTPWnC+1/I6bIL/5a2h2S+UzmcmetWG9t+49n5P3qgp57X+/LLc5Q9+aqi6qfwI9I2bTjiaOCxL9KNNvvnBRl+aZ5vyh+tVX2aXwo63J+0HDI1Sb/svK6X02WtW75W7jO3OLlWf3CrtlFU7FZqp5xER/tGHA5lxPlsxYifM6jS7E9MfyiiOvzlsb63fjvu+8m8ouj/8AP0ViFFwbatJJx1NNR1J7rX96PdnjOamO+piiLdmOUemkeqUyVmeWHxUKFRuVKclFXe+m5Oycf7t3vXf24uUTZ0aG23KCSjUhrsuCldxlbtsn3s6lZDprbqrRnampqaoqPBp30qV/RvzW6jleUPaUcRttxg7xpw0alwcrtyt4pdxZaFNcpX0ZgfvfBErybfRON7vgkU5SvozA/e+CJXk2+icb3fBIDU5K/pKv9nH4jksZ9KVPtZ/Gyb5P9pxw+24qbSjUho1Pgm2nG/erd51dbIUJ7ddbylqbnrdLTvve7ipX9FvqAjuVX97hOyr76ZuZAjHE5Yq0J8I1Hu6paZr87kDyibTjX2xGnBpxpRcW1w1Sd5LutFeJu8lmKtj8RT/ihGaXsS0v40BKba2lp5QsHG+6MdD7a2pfygSeaYxw2XcdOO51Xv7ZxhS9yuee5m2hfN9Wqn+7qxt+FpXvizr+UzF/8Dowi/3lRPtjGLfvcQPMQAAAAAupzcJqUW1JNNSTs01vTT5i0ASrzJjLf9RV/wAbIyc3KblJuUm7uTbbfW2+JaALqdSUJqUG4yTupJtNPpTXA3sbtvE16OirWnOP8Le59tuPeR4AG9gNr4jDRao1ZwT4xT3dtnuv1miAMuIxE6lZzqTlOT4yk22+9l9DHVIYedOE5RhP04J7pW6TXAFTPjcbVrzvWnKcrKKb32XQa4Ma6eKMJ9mv+wvU3cZx+MMZs4nHVa1GEKk3JQWmEW7qK3bl4LwMTRRLo/1Ks2a4nDo6d7bNVRNc/FHSY8p5f3y6NjDY6rSozhTqSjGatNJ6U1v3Pp4vxMNKrKnXjOErSTTjJea01waKBozrsxFOY6Keyb2rrvcNymMVTjSPpHj2a/8AFcTiJ1q7nUk5SlvlN8Xut7kegbWj+y8m9KnwdTTfp89uq79ySIXI6wflqssW46o6XBVH5v8AW1WXCX9XcyzO2Y44zFQjSv5Knezatqb4ytzKysu8jpxFMznWWwvcV3aKLVNMxTRMTM9NI0iPJzMPR7X7rf6lwjwX++sFizGKIaLetzj2qruxH25/3MpJbfxSwvk/2ipotbTq326NXpW7yNAJWubGKx9WtCEak5TUI6Ypv0Vu3LwXgVwuOq0YTjTnKKmtMkn6S6H4vxNYACSW38UsN5NYipotbTq326NXpW7yNAAz4PGToYhTpSlCaTWqPGz4owACs5OU227tttt722+LZnxWOqVYQjUnKahHTFN30roXgvA1wAAAAAAAAAAAAAAAAAAAAAAAAAHOgDyYzGGVFU0VRVHOJz9lrj0b/f4FvOZLFefpK1Wzz8suh2ffdE4i9TjvjWPtz81OkBAsxGIw5+5XNyuqueczM/fUAB6wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
          alt="logo"
          width="50"
          height="50"
          
          />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > 
          
            Book my show
          </Typography>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

        
      </IconButton>

      <SearchIcon />
          <TextField
        
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Search for Movies"
        variant="filled"
        sx={{backgroundColor:"white"}}
        width="100%"
         />
        
       
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
         
            <IconButton
              size="large"
              aria-label="search" 
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
                
     
     
              <MenuIcon />
            </IconButton>
           
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Logo
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
                
             
              
              
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2pR1lJbJmVj5Ldxi3aY8Bdxf0dpwLWIzGWDE5ZsQ&s"
                  alt="logo"
              width="60"
              hight="60"
              />
                </IconButton>
              
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                
                
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;