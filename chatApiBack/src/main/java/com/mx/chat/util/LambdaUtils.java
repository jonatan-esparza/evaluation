package com.mx.chat.util;

import java.util.*;

public class LambdaUtils {
    public static boolean populatedList(List list){
        return Optional.of(Optional.ofNullable(list).orElse(new ArrayList())).map(t -> !t.isEmpty()).get();
    }
    public static boolean populatedSet(Set set){
        return Optional.of(Optional.ofNullable(set).orElse(new HashSet())).map(t -> !t.isEmpty()).get();
    }
    public static boolean populatedMap(Map map){
        return Optional.of(Optional.ofNullable(map).orElse(new HashMap())).map(t -> !t.isEmpty()).get();
    }
}
