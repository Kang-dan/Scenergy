import styles from "./SearchUserVideoResult.module.css";

const SearchUserVideoResult = ({ searchUsers, searchQuery }) => {
  return (
    <div className={styles.searchPageUserContainer}>
      <h3>{searchQuery && `'${searchQuery}'관련 뮤지션`}</h3>
      <div className={styles.searchPageUserResultContainer}>
        {searchUsers.map((result, index) => (
          <div className={styles.searchPageUserResult}>
            <a key={index} href={`/profile/${result.userId}`}>
              <span>
                {result.url} {result.nickName}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchUserVideoResult;
