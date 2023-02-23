import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";
import { color, styled } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

const Verify = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Con = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? `${colors.primary[700]}` : "#000", borderRadius: "20px", boxShadow: "10px 10px 8px #94e2cd", width: 'auto'
    }));

    const ConHeader = styled(Box)(({theme}) => ({
        ...theme.typography.body2,
        textAlign: 'center', fontSize: '16px', padding: theme.spacing(4),
        color: '#fff'
    }));

    return (
        <Box m="20px">
            <Header title="VERIFY" subtitle="Verify with us to get started on Fitaye"/>

            <Box sx={{display: 'flex', justifyContent:'center', mt:'5%', ml: '2%', mr: '2%'}}>
                <Grid container rowSpacing={4} columnSpacing={12} columns={{md: 9, sm: 6}}>
                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Add a Profile Photo</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: jpg, jpeg, png</Typography>
                            </Box>
                        </Con>
                    </Grid>

                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Verify Yourself</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: jpg, jpeg, png</Typography>
                            </Box>
                        </Con>
                    </Grid>

                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Upload Copy of Govn. ID or Passport</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: pdf</Typography>
                            </Box>
                        </Con>
                    </Grid>

                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Upload Relevant Certificates (optional)</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: pdf</Typography>
                            </Box>
                        </Con>
                    </Grid>

                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Upload your Resume (optional)</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: pdf</Typography>
                            </Box>
                        </Con>
                    </Grid>

                    <Grid item xs={3}>
                        <Con>
                            <ConHeader>Upload Relevant References (optional)</ConHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
                                <Input type="file" sx={{ fontSize: '12px'}}/>
                                <Typography marginTop='0.5rem' color={colors.grey[200]} marginBottom='2.5rem'>accepted files: pdf</Typography>
                            </Box>
                        </Con>
                    </Grid>

                </Grid>
            </Box>

           
        </Box>
    )
}

export default Verify;