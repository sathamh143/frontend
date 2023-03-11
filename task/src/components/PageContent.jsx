import { Card, Typography, Button } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Stack } from "@mui/system";



function PageContent() {
    return (
    <>
  
      <div className="work">
       
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:0,marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Work</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>32hrs</Typography>
       <Typography ml={3}>Last Week - 36hrs</Typography>
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'orange',
       borderRadius:5,
        marginLeft:0,marginTop:10 }}>
          
       </Card>


       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:0,flexDirection:'row',marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Excercise</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>4hrs</Typography>
       <Typography ml={3}>Last Week - 5hrs</Typography>
        
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'#96f75ed3',
       borderRadius:5,
        marginLeft:0,flexDirection:'row',marginTop:10 }}>
            <img src="./assets/Excercise.svg"/>
       </Card>
     
       </div>

       <div className= "col-3">
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:5,flexDirection:'row',marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Play</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>10hrs</Typography>
       <Typography ml={3}>Last Week - 8hrs</Typography>
        
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(123, 192, 248)',
       borderRadius:5,
        marginLeft:5,flexDirection:'row',marginTop:10 }}>
       </Card>

       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:5,flexDirection:'row',marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Social</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>5hrs</Typography>
       <Typography ml={3}>Last Week - 10hrs</Typography>
        
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(117, 18, 197)',
       borderRadius:5,
        marginLeft:5,flexDirection:'row',marginTop:10 }}>
       </Card>
       </div>

       <div className="col-6">
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:5,flexDirection:'row',marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Study</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>4hrs</Typography>
       <Typography ml={3}>Last Week - 7hrs</Typography>
        
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(247, 90, 90)',
       borderRadius:5,
        marginLeft:5,flexDirection:'row',marginTop:10 }}>
       </Card>



       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',
        marginLeft:5,flexDirection:'row',marginTop:15}}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Selfcare</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>2hrs</Typography>
       <Typography ml={3}>Last Week - 2hrs</Typography>
        
         </Card>
       <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(243, 243, 95)',
       borderRadius:5,
        marginLeft:5,flexDirection:'row',marginTop:10 }}>
       </Card>

       </div>
     
    
      </>
        
    )
}
export default PageContent
