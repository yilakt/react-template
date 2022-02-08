const ProfileHeader = ({ userProfile }) => {
    return(
        <div style={styles.profileHeader}>
            <img
                alt="profile"
                src={userProfile?.avatar || "./defaultProfileImg.png"}
                style={{width: 70, height: 70, borderRadius: 70/2, marginRight: '3vw' }}
            />
            <div style={styles.infoContainer}>
                <h1 style={{marginLeft:'2%', marginBottom:0}}>{userProfile?.firstName} {userProfile?.lastName}</h1>
                <h4 style={{marginLeft:'2%', marginTop:0, color:'grey'}}>{userProfile?.email}</h4>
            </div>
        </div>
    )
}

const styles = {
    profileHeader:{
        height:'25vh',
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'flex-start',
    },
    infoContainer: {
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
    }
}
export default ProfileHeader;