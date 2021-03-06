import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

function AlertDuplicate(props) {

  const isVisible = props.isVisible
  
  return isVisible? (
    <Alert 
      status='error'   
      flexDirection='column'
      justifyContent = "center"
      alignItems='center'
      justifyItems='center'
      textAlign='center'
      variant='subtle'
      >
      <AlertIcon boxSize='40px'/>
      <Box>
        <AlertTitle>
          Error
        </AlertTitle>
        <AlertDescription>
          This letter has already been added
        </AlertDescription>
      </Box>
    </Alert>
  ) : (<></>)
}

export default AlertDuplicate