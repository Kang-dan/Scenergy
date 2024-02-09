import ApiUtil from "./ApiUtil";

class FollowApi {

    followUser = async (toUserId) => {
        return await ApiUtil.post("/follow", {
            toUserId: toUserId
        })
    }

}

let followApi = new FollowApi();

export default followApi;