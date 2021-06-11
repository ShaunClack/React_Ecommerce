<Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Address
        </DialogTitle>
        <DialogContent dividers>
          
     <List> {/* List 1 */}

      <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label=" Mobile Number" variant="outlined" style={{paddingLeft:'10px'}}/>
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="Pin" variant="outlined" />    
        <TextField id="outlined-basic" label=" Locality" variant="outlined" style={{paddingLeft:'10px'}}/>
      </ListGroup>


      <ListGroup  style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextareaAutosize  placeholder="Address" style={{paddingLeft:'10px'}} rowsMin={3} />
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="City/District" variant="outlined" />
        <TextField id="outlined-basic" label=" State" variant="outlined" style={{paddingLeft:'10px'}}/>
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="Landmark" variant="outlined"/>
        <TextField id="outlined-basic" label=" Alternative Number" variant="outlined" style={{paddingLeft:'10px'}}/>
      </ListGroup>

      <Typography style={{paddingLeft:'30px',paddingTop:'30px'}}>Address Type</Typography>
      <ListGroup  style={{paddingLeft:'30px', width:'100%'}}>
        <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
        <List> 
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
        </List>
        </RadioGroup>
        </FormControl>
      </ListGroup>
        </List>{/* List 1 end */}
         </DialogContent>
            <DialogActions>
                 <Button autoFocus onClick={handleClose} color="primary">
                    Save
                 </Button>
            </DialogActions>
            </Dialog>