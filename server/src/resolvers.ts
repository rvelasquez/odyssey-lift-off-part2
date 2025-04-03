export const resolvers = {
    tracksForHome: (_, __, { dataSources }) => {
        return dataSources.trackAPI.getTracksForHome();
    },
};