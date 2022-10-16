import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
    Image
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";

import { CategoryCard, TrendingCard } from '../components';
import { SearchBar } from 'react-native-elements';

const Home = ({ navigation }) => {

    function renderHeader(){
        return (
            <View
                style={{
                    flexDirection:'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height:80
                }}
            >
                {/*Text*/}
                <View
                   style={{
                    flex:1,
                   }}
                >
                    <Text
                        style={{
                            color:COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    >
                        Привет</Text>

                    <Text
                       style={{
                        marginTop:3,
                        color:COLORS.gray,
                        ...FONTS.body3
                       }}
                    >
                        Что хочешь покушать?</Text>

                </View>

                {/*Image*/}
                <TouchableOpacity
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width:40,
                            height:40,
                            borderRadius:20
                        }}
                    />

                </TouchableOpacity>

            </View>
        )
    }

    function renderSearchBar(){
        return (
            <View
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    marginHorizontal:SIZES.padding,
                    paddingHorizontal:SIZES.radius,
                    borderRadius:10,
                    backgroundColor:COLORS.lightGray
                }}
            >
                <Image
                    source={icons.search}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.gray
                    }}
                    />
                    <TextInput
                       style={{
                        marginLeft:SIZES.radius,
                        ...FONTS.body3
                        
                       }}
                       placeholderTextColor={COLORS.gray}
                       placeholder="Search "
                      
                       />
                
            </View>

        )
    }

    function renderSeeRecipeCard (){
        return(
            <View
              style={{
                flexDirection:'row',
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                borderRadius:10,
                backgroundColor:COLORS.lightGreen
              }}
            >
                {/*Image*/}
                <View
                    style={{
                        width:100,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image 
                        source={images.recipe}
                        style={{
                            width:80,
                            height:80
                        }}
                 />
                </View>
                {/*Text*/}
                <View
                     style={{
                        flex:1,
                        paddingVertical:SIZES.radius
                     }}
                >
                    <Text
                      style={{
                        width:"70%",
                        ...FONTS.body4
                      }}
                    >
                You have 12 recipes that you havent try yet
                        </Text>

                        <TouchableOpacity
                          style={{
                            marginTop:10
                          }}
                          onPress={()=>console.log("See Recipes")}
                        >
                            <Text
                               style={{
                                color:COLORS.darkGreen,
                                textDecorationLine:'underline',
                                ...FONTS.h4
                               }}
                            >
                            See Recipes</Text>

                        </TouchableOpacity>

                </View>

            </View>
        )
    }

    function renderTrendingSection (){
        return (
            <View
               style={{
                marginTop:SIZES.padding
               }}
            >
                <Text
                  style={{
                    marginHorizontal:SIZES.padding,
                    ...FONTS.h2
                  }}
                >
                    Trending Recipe
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=> `${item.id}`}
                    renderItem={({item,index}) => {
                        return(
                            <TrendingCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.
                                padding:0
                            }}
                             recipeItem={item}
                             onPress={()=>navigation.navigate
                             ("Recipe",{recipe:item})}
                             />
                        )
                    }}
                />

            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View
              style={{
                flexDirection:'row',
                alignItems: 'center',
                marginTop:20,
                marginHorizontal: SIZES.padding
              }}
            >
                {/*section title*/}
                <Text
                   style={{
                    flex:1,
                    ...FONTS.h2
                   }}
                >
                    Categories
                </Text>

                {/*view all*/}
                <TouchableOpacity>
                    <Text
                       style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                       }}
                    >
                        View All</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*Header*/}
                        {renderHeader()}
                        {/*Search Bar*/}
                        {renderSearchBar()}
                        {/*See Recipe Card*/}
                        {renderSeeRecipeCard()}
                        {/*trantind section*/}
                        {renderTrendingSection()}
                        {/*category header*/}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />

        </SafeAreaView>
    )
}

export default Home;